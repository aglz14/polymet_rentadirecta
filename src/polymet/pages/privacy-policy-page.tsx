import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground">
            Última actualización: 1 de junio de 2024
          </p>
        </div>

        <div className="space-y-6 text-muted-foreground">
          <p>
            En RentaDirecta.mx, accesible desde https://rentadirecta.mx, una de
            nuestras principales prioridades es la privacidad de nuestros
            visitantes y usuarios. Esta Política de Privacidad contiene
            información sobre qué datos recopilamos y cómo los utilizamos.
          </p>
          <p>
            Si tienes preguntas adicionales o necesitas más información sobre
            nuestra Política de Privacidad, no dudes en contactarnos a través de
            nuestro correo electrónico: privacidad@rentadirecta.mx.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Información que recopilamos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Recopilamos información personal que nos proporcionas directamente
              cuando:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Te registras en nuestra plataforma</li>
              <li>Creas o modificas tu perfil</li>
              <li>Añades propiedades o unidades</li>
              <li>Gestionas inquilinos y contratos</li>
              <li>Utilizas nuestras herramientas de cobro</li>
              <li>Te comunicas con nuestro equipo de soporte</li>
              <li>Te suscribes a nuestro boletín</li>
            </ul>
            <p>
              Esta información puede incluir tu nombre, dirección de correo
              electrónico, número de teléfono, dirección postal, información de
              pago, y cualquier otra información que elijas proporcionar.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Uso de la información
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>Utilizamos la información que recopilamos para:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Proporcionar, mantener y mejorar nuestros servicios</li>
              <li>
                Procesar transacciones y enviar notificaciones relacionadas
              </li>
              <li>
                Enviar comunicaciones técnicas, actualizaciones, alertas de
                seguridad y mensajes de soporte
              </li>
              <li>Responder a tus comentarios, preguntas y solicitudes</li>
              <li>Desarrollar nuevos productos y servicios</li>
              <li>
                Prevenir actividades fraudulentas, mal uso y actividades
                ilegales
              </li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cookies y tecnologías similares
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Utilizamos cookies y tecnologías de seguimiento similares para
              rastrear la actividad en nuestro servicio y mantener cierta
              información. Las cookies son archivos con pequeñas cantidades de
              datos que pueden incluir un identificador único anónimo.
            </p>
            <p>
              Puedes indicar a tu navegador que rechace todas las cookies o que
              te avise cuando se envía una cookie. Sin embargo, si no aceptas
              cookies, es posible que no puedas utilizar algunas partes de
              nuestro servicio.
            </p>
            <p>Utilizamos los siguientes tipos de cookies:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">Cookies esenciales:</span>{" "}
                Necesarias para el funcionamiento de la plataforma
              </li>
              <li>
                <span className="font-medium">Cookies de preferencias:</span>{" "}
                Permiten recordar información que cambia el comportamiento o
                aspecto del sitio
              </li>
              <li>
                <span className="font-medium">Cookies estadísticas:</span> Nos
                ayudan a entender cómo los visitantes interactúan con el sitio
              </li>
              <li>
                <span className="font-medium">Cookies de marketing:</span>{" "}
                Utilizadas para rastrear a los visitantes en los sitios web
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Compartir información
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              No vendemos, comercializamos ni alquilamos tus datos personales a
              terceros. Podemos compartir información personal en las siguientes
              situaciones:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">
                  Con proveedores de servicios:
                </span>{" "}
                Podemos compartir tu información con proveedores de servicios
                externos que realizan servicios en nuestro nombre
              </li>
              <li>
                <span className="font-medium">
                  Para transferencias comerciales:
                </span>{" "}
                Podemos compartir o transferir tu información en relación con, o
                durante las negociaciones de, cualquier fusión, venta de activos
                de la empresa, financiación o adquisición
              </li>
              <li>
                <span className="font-medium">Con tu consentimiento:</span>{" "}
                Podemos divulgar tu información personal para cualquier otro
                propósito con tu consentimiento
              </li>
              <li>
                <span className="font-medium">Por requerimientos legales:</span>{" "}
                Podemos divulgar tu información si creemos que es necesario para
                cumplir con una obligación legal
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Seguridad de los datos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              La seguridad de tus datos es importante para nosotros, pero
              recuerda que ningún método de transmisión por Internet o método de
              almacenamiento electrónico es 100% seguro. Aunque nos esforzamos
              por utilizar medios comercialmente aceptables para proteger tu
              información personal, no podemos garantizar su seguridad absoluta.
            </p>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y
              físicas diseñadas para proteger la información personal que
              recopilamos. Estas medidas incluyen:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Encriptación de datos sensibles</li>
              <li>Firewalls y sistemas de detección de intrusiones</li>
              <li>Acceso restringido a la información personal</li>
              <li>
                Monitoreo regular de nuestros sistemas para detectar posibles
                vulnerabilidades
              </li>
              <li>Capacitación de seguridad para nuestros empleados</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Tus derechos de privacidad
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Dependiendo de tu ubicación, puedes tener ciertos derechos
              relacionados con tu información personal, como:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                El derecho a acceder a la información personal que tenemos sobre
                ti
              </li>
              <li>
                El derecho a solicitar la rectificación o actualización de tu
                información personal inexacta
              </li>
              <li>
                El derecho a solicitar que eliminemos tu información personal
              </li>
              <li>
                El derecho a oponerte al procesamiento de tu información
                personal
              </li>
              <li>El derecho a la portabilidad de datos</li>
              <li>
                El derecho a retirar tu consentimiento en cualquier momento
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctanos a través de la
              información proporcionada al final de esta política.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Retención de datos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Retendremos tu información personal solo durante el tiempo
              necesario para cumplir con los propósitos descritos en esta
              Política de Privacidad, a menos que se requiera o permita un
              período de retención más largo por ley.
            </p>
            <p>
              Cuando ya no tengamos una necesidad comercial legítima de procesar
              tu información personal, la eliminaremos o la anonimizaremos. Si
              esto no es posible, almacenaremos tu información personal de forma
              segura y la aislaremos de cualquier procesamiento posterior hasta
              que sea posible eliminarla.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Transferencias internacionales de datos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Nuestra sede se encuentra en México. Si accedes a nuestros
              servicios desde fuera de México, ten en cuenta que tu información
              puede ser transferida, almacenada y procesada por nosotros en
              nuestras instalaciones y por aquellos terceros con quienes podemos
              compartir tu información personal.
            </p>
            <p>
              Si te encuentras en la Unión Europea o el Reino Unido, ten en
              cuenta que estos países pueden no tener las mismas leyes de
              protección de datos que tu país. Tomaremos todas las medidas
              necesarias para garantizar que tus datos se traten de forma segura
              y de acuerdo con esta Política de Privacidad.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Privacidad de los menores
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Nuestros servicios no están dirigidos a personas menores de 18
              años. No recopilamos a sabiendas información personal de niños
              menores de 18 años. Si eres padre o tutor y sabes que tu hijo nos
              ha proporcionado datos personales, contáctanos para que podamos
              tomar las medidas necesarias.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cambios a esta política
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en
              cuando. Te notificaremos cualquier cambio publicando la nueva
              Política de Privacidad en esta página y, si los cambios son
              significativos, te enviaremos una notificación por correo
              electrónico.
            </p>
            <p>
              Te recomendamos revisar esta Política de Privacidad periódicamente
              para cualquier cambio. Los cambios a esta Política de Privacidad
              son efectivos cuando se publican en esta página.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">Contáctanos</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Si tienes preguntas sobre esta Política de Privacidad, puedes
              contactarnos:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Por correo electrónico: privacidad@rentadirecta.mx</li>
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
