import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckIcon,
  CreditCardIcon,
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function PreciosPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[#1B2A55] sm:text-5xl">
          Precios transparentes y simples
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          En RentaDirecta nos enfocamos en ofrecer la mejor plataforma para la
          gestión inmobiliaria sin costos ocultos.
        </p>
      </div>

      {/* Main pricing card */}
      <div className="max-w-3xl mx-auto mb-16">
        <Card className="border-2 border-[#1B2A55] shadow-lg">
          <CardHeader className="text-center bg-[#1B2A55] text-white">
            <CardTitle className="text-3xl">Plan Único</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Todo lo que necesitas para gestionar tus propiedades
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <span className="text-5xl font-bold tracking-tight text-[#1B2A55]">
                  $0
                </span>
                <span className="text-xl text-gray-600 ml-2">MXN</span>
                <p className="text-gray-500 mt-1">Sin costo de suscripción</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-[#86BC65] mr-3 flex-shrink-0" />

                <p>Acceso completo a todas las funciones de la plataforma</p>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-[#86BC65] mr-3 flex-shrink-0" />

                <p>
                  <span className="font-semibold">0%</span> de comisión por
                  transacción de renta
                </p>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-[#86BC65] mr-3 flex-shrink-0" />

                <p>Número ilimitado de propiedades y unidades</p>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-[#86BC65] mr-3 flex-shrink-0" />

                <p>Soporte técnico 24/7</p>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-[#86BC65] mr-3 flex-shrink-0" />

                <p>Actualizaciones y nuevas funciones incluidas</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full bg-[#1B2A55] hover:bg-[#1B2A55]/90 text-white">
              Comenzar gratis
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Sin tarjeta de crédito requerida
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* How it works section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-[#1B2A55] mb-10">
          ¿Cómo funciona nuestro modelo?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-[#1B2A55]/10 flex items-center justify-center mb-4">
                <CreditCardIcon className="h-6 w-6 text-[#1B2A55]" />
              </div>
              <CardTitle className="text-xl">
                Sin costos de suscripción
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                No cobramos ninguna tarifa mensual o anual por utilizar nuestra
                plataforma. Accede a todas las funciones sin costo.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-[#1B2A55]/10 flex items-center justify-center mb-4">
                <CalendarIcon className="h-6 w-6 text-[#1B2A55]" />
              </div>
              <CardTitle className="text-xl">0% de comisión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                No cobramos ningún porcentaje sobre los pagos de renta que
                proceses a través de nuestra plataforma.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-[#1B2A55]/10 flex items-center justify-center mb-4">
                <ClockIcon className="h-6 w-6 text-[#1B2A55]" />
              </div>
              <CardTitle className="text-xl">Retención temporal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Los pagos de renta se retienen durante 3 días hábiles antes de
                ser liberados a tu cuenta bancaria para garantizar seguridad.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section - Now with Accordion */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1B2A55] mb-10">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-[#1B2A55]">
                ¿Por qué retienen los pagos durante 3 días?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Esta retención temporal nos permite verificar las transacciones,
                prevenir fraudes y asegurar que los pagos se procesen
                correctamente. Es una medida de seguridad tanto para
                propietarios como para inquilinos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-[#1B2A55]">
                ¿Hay algún límite en el número de propiedades que puedo
                gestionar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No, puedes gestionar un número ilimitado de propiedades y
                unidades sin costo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-[#1B2A55]">
                ¿Cómo se financian si el servicio es gratuito?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Nuestro modelo de negocio se basa en ofrecer servicios
                adicionales opcionales y en el rendimiento financiero generado
                durante el período de retención de los pagos, lo que nos permite
                ofrecer la plataforma base sin costo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-[#1B2A55]">
                ¿Hay costos ocultos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No, nuestra política es de total transparencia. No hay costos
                ocultos ni cargos sorpresa. El servicio básico es completamente
                gratuito.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-br from-[#1B2A55] to-[#1B2A55]/90 rounded-lg shadow-lg">
        <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para comenzar?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Regístrate hoy y comienza a gestionar tus propiedades de manera
              eficiente.
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/registro">
                <Button className="bg-white text-[#1B2A55] hover:bg-white/90 text-base font-medium shadow-lg">
                  Comenzar gratis
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contacto">
                <Button
                  variant="outline"
                  className="border-white border-2 text-white font-medium shadow-lg hover:bg-white/20"
                >
                  Contactar con ventas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
