import React from "react";
import {
   Body,
   Container,
   Head,
   Heading,
   Hr,
   Html,
   Img,
   Link,
   Preview,
   Section,
   Text,
   Button,
} from "@react-email/components";

/* const baseUrl = process.env.FRONTEND_URL; */
const baseUrl = "https://horizonbienetre.fr";

export const EmailAutoResponse = () => (
   <Html>
      <Head />
      <Body style={main}>
         <Preview>Horizonbienetre</Preview>
         <Container style={container}>
            <Section style={coverSection}>
               <Section style={imageSection}>
                  <Link
                     href="https://horizonbienetre.fr"
                     target="_blank"
                     style={{ display: "inline-block" }}
                  >
                     <Img
                        src={`${baseUrl}/assets/Logo-B1O8D7lL.jpg`}
                        width="72"
                        height="87"
                        alt="Logo Horizonbienetre.fr"
                     />
                  </Link>
               </Section>

               <Section style={upperSection}>
                  <Heading style={{...h1, textAlign: "center"}}>Merci pour votre message</Heading>
                  <Text style={mainText}>
                     Nous avons bien pris en compte votre demande et reviendrons
                     vers vous dans les plus brefs délais.
                     <br />
                     Si votre demande est urgente, n'hésitez pas à nous
                     contacter au 06 06 06 06 06.
                     <br />
                     Nous vous souhaitons une journée sereine et apaisante.
                     <br />
                     <br />
                     Bien à vous,
                     <br />
                     <br /> L'équipe Horizon Bien-être
                  </Text>
               </Section>

               <Hr />
            </Section>

            <Text style={footerText}>
               Horaires : Du lundi au samedi de 10h00 à 19h00
               <br />
               Prestation sur RDV
               <br />
               En cabine / A domicile / En entreprise / En visio
               <br />
               <br />
               <Link
                  href="https://horizonbienetre.fr"
                  target="_blank"
                  style={link}
               >
                  Horizonbienetre.fr
               </Link>
            </Text>
         </Container>
      </Body>
   </Html>
);

export default EmailAutoResponse;

const main = {
   backgroundColor: "#fff",
   color: "#212121",
};

const container = {
   padding: "2px",
   margin: "0 auto",
   backgroundColor: "#fff",
   boxShadow: "2px 2px 19px 3px rgba(0, 0, 0, 0.62)"
};

const h1 = {
   color: "#333",
   fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
   fontSize: "20px",
   fontWeight: "bold",
   marginBottom: "15px",
};

const link = {
   color: "#2754C5",
   fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
   fontSize: "14px",
   textDecoration: "underline",
};

const text = {
   color: "#333",
   fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
   fontSize: "14px",
   margin: "24px 0",
};

const imageSection = {
   textAlign: "center",
   backgroundColor: "#fff",
   padding: "10px 0 10px 10px"
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "10px 30px" };

const lowerSection = { padding: "10px 30px" };

const footerText = {
   ...text,
   fontSize: "12px",
   padding: "0 20px",
};

const verifyText = {
   ...text,
   margin: 0,
   fontWeight: "bold",
   textAlign: "center",
};

const codeText = {
   ...text,
   fontWeight: "bold",
   fontSize: "36px",
   margin: "10px 0",
   textAlign: "center",
};

const validityText = {
   ...text,
   margin: "0px",
   textAlign: "center",
};

const verificationSection = {
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };
