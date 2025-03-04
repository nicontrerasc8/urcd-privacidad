import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React from 'react';

const Policies = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  };

  const sectionTitleStyle = {
    color: '#2980b9',
    fontSize: '1.5em',
    margin: '20px 0 10px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Políticas de Uso - Un Ratito con Dios</h1>

      <h2 style={sectionTitleStyle}>1. Aceptación de Términos</h2>
      <p style={paragraphStyle}>
        Al descargar o utilizar "Un Ratito con Dios", aceptas cumplir con estas Políticas de Uso y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguna parte de estas políticas, no debes usar la aplicación.
      </p>

      <h2 style={sectionTitleStyle}>2. Uso Permitido</h2>
      <p style={paragraphStyle}>
        "Un Ratito con Dios" está diseñada para proporcionar contenido espiritual y religioso de acuerdo con los principios de la fe católica. El uso de la aplicación debe ser personal y no comercial. No se permite el uso de la aplicación para actividades ilegales, inmorales o que contradigan las enseñanzas de la Iglesia Católica.
      </p>

      <h2 style={sectionTitleStyle}>3. Contenido</h2>
      <p style={paragraphStyle}>
        El contenido disponible en "Un Ratito con Dios", incluyendo textos, imágenes, oraciones, meditaciones y cualquier otro material, es propiedad de Nicolás Contreras (DNI 71467560, RUC 10714675601). El contenido está protegido por leyes de derechos de autor y no puede ser reproducido, distribuido o utilizado sin el consentimiento previo por escrito de Nicolás Contreras.
      </p>

      <h2 style={sectionTitleStyle}>4. Responsabilidad del Usuario</h2>
      <p style={paragraphStyle}>
        Los usuarios son responsables de garantizar que su uso de la aplicación cumple con todas las leyes locales, nacionales e internacionales. Además, los usuarios se comprometen a no interferir con el funcionamiento de la aplicación o intentar acceder a áreas restringidas de la misma.
      </p>

      <h2 style={sectionTitleStyle}>5. Privacidad</h2>
      <p style={paragraphStyle}>
        "Un Ratito con Dios" respeta tu privacidad. Al utilizar la aplicación, aceptas la recopilación y uso de información conforme a nuestra Política de Privacidad. No compartiremos tu información personal con terceros sin tu consentimiento, excepto cuando sea requerido por ley.
      </p>

      <h2 style={sectionTitleStyle}>6. Modificaciones</h2>
      <p style={paragraphStyle}>
        Nicolás Contreras se reserva el derecho de modificar estas Políticas de Uso en cualquier momento. Cualquier cambio será notificado a través de la aplicación, y el uso continuado de la aplicación tras dicha notificación constituirá tu aceptación de las nuevas políticas.
      </p>

      <h2 style={sectionTitleStyle}>7. Terminación</h2>
      <p style={paragraphStyle}>
        Podemos suspender o cancelar tu acceso a "Un Ratito con Dios" en cualquier momento si consideramos que has violado estas Políticas de Uso o por cualquier otro motivo que consideremos justificado.
      </p>

      <h2 style={sectionTitleStyle}>8. Contacto</h2>
      <p style={paragraphStyle}>
        Para cualquier pregunta o inquietud sobre estas Políticas de Uso, por favor contacta a Nicolás Contreras (DNI 71467560, RUC 10714675601) en [información de contacto].
      </p>
    </div>
  );
};



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Politicas de privacidad - Un Ratito Con Dios</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Policies/>
    </>
  );
}
