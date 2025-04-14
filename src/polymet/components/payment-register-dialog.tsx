import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, CheckIcon, CreditCardIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  tenantId: z.string({
    required_error: "Selecciona un inquilino",
  }),
  propertyUnitId: z.string({
    required_error: "Selecciona una propiedad/unidad",
  }),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Ingresa un monto válido",
  }),
  date: z.date({
    required_error: "Selecciona una fecha",
  }),
  paymentMethod: z.string({
    required_error: "Selecciona un método de pago",
  }),
  reference: z.string().optional(),
});

interface PaymentRegisterDialogProps {
  onRegisterPayment: (data: any) => void;
  tenants: {
    id: string;
    name: string;
    propertyUnits: Array<{
      id: string;
      property: string;
      unit: string;
      rentAmount: number;
    }>;
  }[];
}

export default function PaymentRegisterDialog({
  onRegisterPayment,
  tenants,
}: PaymentRegisterDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reference: "",
    },
  });

  const selectedTenantData = selectedTenant
    ? tenants.find((tenant) => tenant.id === selectedTenant)
    : null;

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const paymentData = {
      ...values,
      amount: parseFloat(values.amount),
    };

    onRegisterPayment(paymentData);

    toast({
      title: "Pago registrado",
      description: "El pago ha sido registrado exitosamente.",
      action: (
        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckIcon className="h-4 w-4 text-green-500" />
        </div>
      ),
    });

    form.reset();
    setSelectedTenant(null);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 text-white">
          <CreditCardIcon className="mr-2 h-4 w-4" />
          Registrar Pago
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Registrar nuevo pago</DialogTitle>
          <DialogDescription>
            Completa los detalles del pago a registrar en el sistema.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4 py-2"
          >
            <FormField
              control={form.control}
              name="tenantId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquilino</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedTenant(value);
                      form.setValue("propertyUnitId", "");
                      form.setValue("amount", "");
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un inquilino" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tenants.map((tenant, index) => (
                        <SelectItem key={tenant.id} value={tenant.id}>
                          {tenant.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="propertyUnitId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Propiedad / Unidad</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      if (selectedTenantData) {
                        const unit = selectedTenantData.propertyUnits.find(
                          (unit) => unit.id === value
                        );
                        if (unit) {
                          form.setValue("amount", unit.rentAmount.toString());
                        }
                      }
                    }}
                    defaultValue={field.value}
                    disabled={!selectedTenant}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una propiedad/unidad" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectedTenantData?.propertyUnits.map((unit) => (
                        <SelectItem key={unit.id} value={unit.id}>
                          {unit.property} / {unit.unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monto (MXN)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0.00"
                      {...field}
                      type="number"
                      min="0"
                      step="0.01"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha de pago</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: es })
                            ) : (
                              <span>Seleccionar fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Método de pago</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un método" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="transferencia">
                          Transferencia bancaria
                        </SelectItem>
                        <SelectItem value="efectivo">Efectivo</SelectItem>
                        <SelectItem value="tarjeta">Tarjeta</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="reference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Número de referencia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
              >
                Registrar Pago
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
