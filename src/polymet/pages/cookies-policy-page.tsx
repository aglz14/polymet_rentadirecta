import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function CookiesPolicyPage() {
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
            Política de Cookies
          </h1>
          <p className="text-muted-foreground">
            Última actualización: 1 de junio de 2024
          </p>
        </div>

        <div className="space-y-6 text-muted-foreground">
          <p>
            En RentaDirecta.mx, utilizamos cookies y otras tecnologías de
            seguimiento para mejorar tu experiencia en nuestra plataforma. Esta
            Política de Cookies explica qué son las cookies, cómo las
            utilizamos, qué tipos de cookies usamos y cómo puedes controlarlas.
          </p>
          <p>
            Al utilizar nuestro sitio web y servicios, aceptas el uso de cookies
            de acuerdo con esta política. Si no estás de acuerdo con nuestro uso
            de cookies, debes ajustar la configuración de tu navegador o dejar
            de usar RentaDirecta.mx.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            ¿Qué son las cookies?
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo (computadora, teléfono móvil o tablet) cuando visitas
              un sitio web. Las cookies son ampliamente utilizadas para hacer
              que los sitios web funcionen de manera más eficiente, así como
              para proporcionar información a los propietarios del sitio.
            </p>
            <p>
              Las cookies permiten que un sitio web reconozca tu dispositivo y
              recuerde información sobre tu visita, como tus preferencias de
              idioma, tamaño de fuente y otras configuraciones. Esto puede hacer
              que tu próxima visita sea más fácil y el sitio más útil para ti.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Tipos de cookies que utilizamos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Utilizamos diferentes tipos de cookies en nuestro sitio web para
              distintos propósitos:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">Cookies esenciales:</span> Son
                necesarias para el funcionamiento básico del sitio web. Te
                permiten navegar por el sitio y utilizar sus funciones, como
                acceder a áreas seguras. Sin estas cookies, no podríamos
                proporcionar los servicios que has solicitado.
              </li>
              <li>
                <span className="font-medium">Cookies de preferencias:</span>{" "}
                Estas cookies permiten que nuestro sitio web recuerde
                información que cambia la forma en que el sitio se comporta o se
                ve, como tu idioma preferido o la región en la que te
                encuentras.
              </li>
              <li>
                <span className="font-medium">Cookies estadísticas:</span> Nos
                ayudan a entender cómo los visitantes interactúan con nuestro
                sitio web, recopilando y reportando información de forma
                anónima. Esto nos permite mejorar la forma en que funciona
                nuestro sitio web.
              </li>
              <li>
                <span className="font-medium">Cookies de marketing:</span> Se
                utilizan para seguir a los visitantes en los sitios web. La
                intención es mostrar anuncios que sean relevantes y atractivos
                para el usuario individual, y por lo tanto más valiosos para los
                editores y anunciantes terceros.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cookies específicas que utilizamos
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              A continuación se detallan las cookies específicas que utilizamos:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left font-medium text-[#1B2A55]">
                      Nombre
                    </th>
                    <th className="py-2 text-left font-medium text-[#1B2A55]">
                      Tipo
                    </th>
                    <th className="py-2 text-left font-medium text-[#1B2A55]">
                      Propósito
                    </th>
                    <th className="py-2 text-left font-medium text-[#1B2A55]">
                      Duración
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">session_id</td>
                    <td className="py-2">Esencial</td>
                    <td className="py-2">
                      Mantiene tu sesión activa mientras navegas
                    </td>
                    <td className="py-2">Sesión</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">auth_token</td>
                    <td className="py-2">Esencial</td>
                    <td className="py-2">Autenticación de usuario</td>
                    <td className="py-2">30 días</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">language_preference</td>
                    <td className="py-2">Preferencia</td>
                    <td className="py-2">Guarda tu preferencia de idioma</td>
                    <td className="py-2">1 año</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Estadística</td>
                    <td className="py-2">
                      Google Analytics - Distingue usuarios
                    </td>
                    <td className="py-2">2 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">_gid</td>
                    <td className="py-2">Estadística</td>
                    <td className="py-2">
                      Google Analytics - Distingue usuarios
                    </td>
                    <td className="py-2">24 horas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">_fbp</td>
                    <td className="py-2">Marketing</td>
                    <td className="py-2">
                      Facebook Pixel - Seguimiento de conversiones
                    </td>
                    <td className="py-2">3 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cookies de terceros
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Además de nuestras propias cookies, también podemos utilizar
              varias cookies de terceros para reportar estadísticas de uso,
              entregar anuncios relevantes para ti, y así sucesivamente. Estas
              cookies pueden incluir:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Google Analytics (para análisis de tráfico web)</li>
              <li>Google Ads (para publicidad)</li>
              <li>Facebook Pixel (para marketing y análisis)</li>
              <li>HubSpot (para marketing y análisis)</li>
              <li>Hotjar (para análisis de comportamiento)</li>
            </ul>
            <p>
              No tenemos control sobre estas cookies de terceros. Te
              recomendamos consultar los sitios web de estos terceros para
              obtener más información sobre las cookies que utilizan y cómo
              gestionarlas.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cómo controlar las cookies
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Puedes controlar y/o eliminar las cookies según tus preferencias.
              Puedes eliminar todas las cookies que ya están en tu dispositivo y
              puedes configurar la mayoría de los navegadores para evitar que se
              coloquen. Sin embargo, si haces esto, es posible que tengas que
              ajustar manualmente algunas preferencias cada vez que visites un
              sitio y algunos servicios y funcionalidades pueden no funcionar.
            </p>
            <p>
              A continuación, te explicamos cómo puedes gestionar las cookies en
              los navegadores más populares:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">Chrome:</span> Configuración {">"}{" "}
                Privacidad y seguridad {">"} Cookies y otros datos de sitios
              </li>
              <li>
                <span className="font-medium">Firefox:</span> Opciones {">"}{" "}
                Privacidad y Seguridad {">"} Cookies y datos del sitio
              </li>
              <li>
                <span className="font-medium">Safari:</span> Preferencias {">"}{" "}
                Privacidad {">"} Cookies y datos del sitio web
              </li>
              <li>
                <span className="font-medium">Edge:</span> Configuración {">"}{" "}
                Cookies y permisos del sitio {">"} Administrar y eliminar
                cookies y datos del sitio
              </li>
            </ul>
            <p>
              También puedes visitar{" "}
              <a
                href="https://www.aboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B2A55] underline hover:text-[#86BC65]"
              >
                www.aboutcookies.org
              </a>{" "}
              o{" "}
              <a
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B2A55] underline hover:text-[#86BC65]"
              >
                www.allaboutcookies.org
              </a>{" "}
              para obtener información detallada sobre cómo eliminar las cookies
              de tu navegador y cómo controlar las cookies en general.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Consentimiento para el uso de cookies
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Al utilizar nuestro sitio web, aceptas el uso de cookies de
              acuerdo con esta Política de Cookies. Te informaremos sobre el uso
              de cookies en nuestro sitio web mediante un banner de cookies
              cuando lo visites por primera vez, y también cuando realicemos
              cambios sustanciales en esta política.
            </p>
            <p>
              Si continúas utilizando nuestro sitio web después de haber sido
              informado sobre nuestro uso de cookies, entenderemos que aceptas
              el uso de cookies de acuerdo con esta política. Sin embargo,
              siempre puedes cambiar la configuración de tu navegador para
              modificar las cookies que se aceptan o se rechazan.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">
            Cambios en nuestra política de cookies
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Podemos actualizar nuestra Política de Cookies de vez en cuando
              para reflejar, por ejemplo, cambios en las cookies que utilizamos
              o por otros motivos operativos, legales o regulatorios. Por lo
              tanto, visita esta Política de Cookies regularmente para
              mantenerte informado sobre nuestro uso de cookies y tecnologías
              relacionadas.
            </p>
            <p>
              La fecha en la parte superior de esta Política de Cookies indica
              cuándo se actualizó por última vez.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1B2A55]">Contáctanos</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Si tienes preguntas sobre esta Política de Cookies, puedes
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
