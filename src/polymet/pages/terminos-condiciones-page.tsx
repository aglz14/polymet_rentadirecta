import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";

export default function TerminosCondicionesPage() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-[#1B2A55] hover:text-[#86BC65]"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Button>
        </Link>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#1B2A55] md:text-4xl">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground">
            Última actualización: 1 de junio de 2024
          </p>
        </div>

        <div className="space-y-6 text-muted-foreground">
          <p>
            Bienvenido a RentaDirecta.mx. Estos términos y condiciones describen
            las reglas y regulaciones para el uso del sitio web y la plataforma
            de RentaDirecta, ubicado en https://rentadirecta.mx.
          </p>
          <p>
            Al acceder a este sitio web y utilizar nuestros servicios, asumimos
            que aceptas estos términos y condiciones en su totalidad. No
            continúes usando la plataforma RentaDirecta si no estás de acuerdo
            con todos los términos y condiciones establecidos en esta página.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Definiciones
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Los siguientes términos se aplican a estos Términos y Condiciones,
              Política de Privacidad y cualquier otro acuerdo:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">Cliente, Usuario, Tú y Tu:</span>{" "}
                se refiere a la persona que accede a esta plataforma y acepta
                los términos y condiciones de la empresa.
              </li>
              <li>
                <span className="font-medium">
                  La Compañía, Nosotros, Nuestro:
                </span>{" "}
                se refiere a RentaDirecta.
              </li>
              <li>
                <span className="font-medium">Parte, Partes:</span> se refiere
                tanto al Cliente como a nosotros mismos, o al Cliente o a
                nosotros mismos.
              </li>
              <li>
                <span className="font-medium">Plataforma:</span> se refiere al
                sitio web y aplicación de RentaDirecta.
              </li>
              <li>
                <span className="font-medium">Servicio:</span> se refiere a los
                servicios ofrecidos por RentaDirecta como se detalla en esta
                plataforma.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Licencia de uso
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              A menos que se indique lo contrario, RentaDirecta y/o sus
              licenciantes poseen los derechos de propiedad intelectual de todo
              el material en RentaDirecta. Todos los derechos de propiedad
              intelectual están reservados.
            </p>
            <p>
              Puedes ver y/o imprimir páginas desde la plataforma para tu uso
              personal, sujeto a las restricciones establecidas en estos
              términos y condiciones.
            </p>
            <p>No debes:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                Republicar material de RentaDirecta (incluyendo la republicación
                en otro sitio web)
              </li>
              <li>Vender, alquilar o sublicenciar material de RentaDirecta</li>
              <li>Reproducir, duplicar o copiar material de RentaDirecta</li>
              <li>
                Redistribuir contenido de RentaDirecta (a menos que el contenido
                esté específicamente hecho para redistribución)
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cuentas de usuario
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Al crear una cuenta en nuestra plataforma, eres responsable de
              mantener la seguridad de tu cuenta y contraseña. La compañía no
              puede y no será responsable de ninguna pérdida o daño por tu
              incumplimiento de esta obligación de seguridad.
            </p>
            <p>
              Eres responsable de cualquier actividad que ocurra bajo tu cuenta
              y de mantener la confidencialidad de tu contraseña. Debes
              notificarnos inmediatamente de cualquier uso no autorizado de tu
              cuenta o cualquier otra violación de seguridad.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Planes de suscripción y pagos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              RentaDirecta ofrece diferentes planes de suscripción para acceder
              a nuestros servicios. Al suscribirte a cualquiera de nuestros
              planes, aceptas pagar las tarifas aplicables según lo establecido
              en nuestra página de precios.
            </p>
            <p>
              Los pagos se realizan por adelantado para el período de
              suscripción seleccionado. Las suscripciones se renuevan
              automáticamente al final de cada período a menos que canceles tu
              suscripción antes de la fecha de renovación.
            </p>
            <p>
              Nos reservamos el derecho de cambiar nuestras tarifas en cualquier
              momento, pero te notificaremos con al menos 30 días de
              anticipación antes de que los cambios entren en vigor.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Uso aceptable
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              No debes utilizar esta plataforma de ninguna manera que cause, o
              pueda causar, daño a la plataforma o deterioro de la
              disponibilidad o accesibilidad de RentaDirecta, o de cualquier
              manera que sea ilegal, fraudulenta o dañina, o en conexión con
              cualquier propósito o actividad ilegal, fraudulenta o dañina.
            </p>
            <p>
              No debes utilizar esta plataforma para copiar, almacenar,
              hospedar, transmitir, enviar, usar, publicar o distribuir
              cualquier material que consista en (o esté vinculado a) cualquier
              spyware, virus informático, troyano, gusano, registrador de
              teclas, rootkit u otro software malicioso.
            </p>
            <p>
              No debes realizar actividades de recopilación sistemática de datos
              o extracción en esta plataforma sin el consentimiento expreso por
              escrito de RentaDirecta.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Limitación de responsabilidad
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              En ningún caso RentaDirecta, ni sus directores, empleados, socios,
              agentes, proveedores o afiliados serán responsables por cualquier
              daño indirecto, incidental, especial, consecuente o punitivo,
              incluyendo sin limitación, pérdida de ganancias, datos, uso, buena
              voluntad, u otras pérdidas intangibles, resultantes de:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                Tu acceso o uso o incapacidad para acceder o usar el Servicio
              </li>
              <li>Cualquier conducta o contenido de terceros en el Servicio</li>
              <li>Cualquier contenido obtenido del Servicio</li>
              <li>
                Acceso no autorizado, uso o alteración de tus transmisiones o
                contenido
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Indemnización
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Aceptas defender, indemnizar y mantener indemne a RentaDirecta,
              sus afiliados, licenciantes y proveedores de servicios, y sus
              respectivos funcionarios, directores, empleados, contratistas,
              agentes, licenciantes, proveedores, sucesores y cesionarios de y
              contra cualquier reclamo, responsabilidad, daño, juicio, premio,
              pérdida, costo, gasto o tarifa (incluidos los honorarios
              razonables de abogados) que surjan de o estén relacionados con tu
              violación de estos Términos y Condiciones.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">Terminación</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Podemos terminar o suspender tu acceso inmediatamente, sin previo
              aviso o responsabilidad, por cualquier motivo, incluyendo sin
              limitación si incumples los Términos y Condiciones.
            </p>
            <p>
              Al terminar tu acceso, tu derecho a utilizar el Servicio cesará
              inmediatamente. Si deseas terminar tu cuenta, puedes simplemente
              discontinuar el uso del Servicio o notificarnos que deseas
              cancelar tu cuenta.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Ley aplicable
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes
              de México, sin tener en cuenta sus disposiciones sobre conflictos
              de leyes.
            </p>
            <p>
              Nuestra falta de hacer cumplir cualquier derecho o disposición de
              estos Términos no se considerará una renuncia a esos derechos. Si
              alguna disposición de estos Términos es considerada inválida o
              inaplicable por un tribunal, las disposiciones restantes de estos
              Términos permanecerán en vigor.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cambios a estos términos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar
              o reemplazar estos Términos en cualquier momento. Si una revisión
              es material, intentaremos proporcionar un aviso de al menos 30
              días antes de que los nuevos términos entren en vigor.
            </p>
            <p>
              Al continuar accediendo o utilizando nuestro Servicio después de
              que esas revisiones entren en vigor, aceptas estar sujeto a los
              términos revisados. Si no estás de acuerdo con los nuevos
              términos, por favor deja de usar el Servicio.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">Contáctanos</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Si tienes preguntas sobre estos Términos y Condiciones, puedes
              contactarnos:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Por correo electrónico: legal@rentadirecta.mx</li>
              <li>Por teléfono: +52 55 1234 5678</li>
              <li>
                Por correo postal: Av. Insurgentes Sur 1602, Crédito
                Constructor, Benito Juárez, 03940 Ciudad de México, CDMX, México
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
