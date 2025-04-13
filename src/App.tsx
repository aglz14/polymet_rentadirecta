import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/polymet/layouts/main-layout";
import DashboardLayout from "@/polymet/layouts/dashboard-layout";
import LandingPage from "@/polymet/pages/landing-page";
import DashboardPage from "@/polymet/pages/dashboard-page";
import PropertyUnitsPage from "@/polymet/pages/property-units-page";
import PropertyUnitDetailsPage from "@/polymet/pages/property-unit-details-page";
import PropertyDetailsPage from "@/polymet/pages/property-details-page";
import ContactPage from "@/polymet/pages/contact-page";
import EdificiosPage from "@/polymet/pages/edificios-page";
import InquilinosPage from "@/polymet/pages/inquilinos-page";
import PagosPage from "@/polymet/pages/pagos-page";
import DocumentosPage from "@/polymet/pages/documentos-page";
import MensajesPage from "@/polymet/pages/mensajes-page";
import ConfiguracionPage from "@/polymet/pages/configuracion-page";
import PrivacyPolicyPage from "@/polymet/pages/privacy-policy-page";
import TerminosCondicionesPage from "@/polymet/pages/terminos-condiciones-page";
import CookiesPolicyPage from "@/polymet/pages/cookies-policy-page";
import PreciosPage from "@/polymet/pages/precios-page";
import GestionPropiedadesPage from "@/polymet/pages/gestion-propiedades-page";
import CobroRentasPage from "@/polymet/pages/cobro-rentas-page";
import GestionInquilinosPage from "@/polymet/pages/gestion-inquilinos-page";
import GestionDocumentalPage from "@/polymet/pages/gestion-documental-page";
import SobreNosotrosPage from "@/polymet/pages/sobre-nosotros-page";
import CarrerasPage from "@/polymet/pages/carreras-page";
import LoginPage from "@/polymet/pages/login-page";
import BuildingDetailsPage from "@/polymet/pages/building-details-page";

export default function ProptechPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/edificios"
          element={
            <DashboardLayout>
              <EdificiosPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/edificios/:buildingId"
          element={
            <DashboardLayout>
              <BuildingDetailsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/unidades"
          element={
            <DashboardLayout>
              <PropertyUnitsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/unidades/:unitId"
          element={
            <DashboardLayout>
              <PropertyUnitDetailsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/propiedades/:propertyId"
          element={
            <DashboardLayout>
              <PropertyDetailsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/inquilinos"
          element={
            <DashboardLayout>
              <InquilinosPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/pagos"
          element={
            <DashboardLayout>
              <PagosPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/documentos"
          element={
            <DashboardLayout>
              <DocumentosPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/mensajes"
          element={
            <DashboardLayout>
              <MensajesPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/mensajes/:threadId"
          element={
            <DashboardLayout>
              <MensajesPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard/configuracion"
          element={
            <DashboardLayout>
              <ConfiguracionPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/contacto"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />

        <Route
          path="/privacidad"
          element={
            <MainLayout>
              <PrivacyPolicyPage />
            </MainLayout>
          }
        />

        <Route
          path="/terminos"
          element={
            <MainLayout>
              <TerminosCondicionesPage />
            </MainLayout>
          }
        />

        <Route
          path="/cookies"
          element={
            <MainLayout>
              <CookiesPolicyPage />
            </MainLayout>
          }
        />

        <Route
          path="/precios"
          element={
            <MainLayout>
              <PreciosPage />
            </MainLayout>
          }
        />

        <Route
          path="/sobre-nosotros"
          element={
            <MainLayout>
              <SobreNosotrosPage />
            </MainLayout>
          }
        />

        {/* New Careers page */}
        <Route
          path="/carreras"
          element={
            <MainLayout>
              <CarrerasPage />
            </MainLayout>
          }
        />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Solution pages */}
        <Route
          path="/soluciones/gestion-propiedades"
          element={
            <MainLayout>
              <GestionPropiedadesPage />
            </MainLayout>
          }
        />

        <Route
          path="/soluciones/cobro-rentas"
          element={
            <MainLayout>
              <CobroRentasPage />
            </MainLayout>
          }
        />

        <Route
          path="/soluciones/gestion-inquilinos"
          element={
            <MainLayout>
              <GestionInquilinosPage />
            </MainLayout>
          }
        />

        <Route
          path="/soluciones/gestion-documental"
          element={
            <MainLayout>
              <GestionDocumentalPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
