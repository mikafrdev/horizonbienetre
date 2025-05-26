const React = require("react");
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
const baseUrl = "https://horizonbienetre.fr"

export const EmailAutoResponse = ({verificationCode}) => (
   <Html>
      <Head />
      <Body style={main}>
         <Preview>Horizonbienetre</Preview>
         <Container style={container}>
            <Section style={coverSection}>
               <Section style={imageSection}>
                  <Img
                     src={`${baseUrl}/assets/Logo-B1O8D7lL.jpg`}
                     width="65"
                     height="80"
                     alt="Logo Horizonbienetre.fr"
                  />
               </Section>

               <Section style={upperSection}>
                  <Heading style={h1}>Découvrez nos soins bien-être personnalisés</Heading>
                  <Text style={mainText}>
                    Votre demande de contact a bien été reçu, nous reviendrons très vite vers vous.
                  </Text>

                  <Section style={verificationSection}>
                     <Text style={verifyText}>Verification code</Text>
                     <Text style={codeText}>{verificationCode}</Text>
                     <Text style={validityText}>
                        (This code is valid for 10 minutes)
                     </Text>
                  </Section>
               </Section>

               <Hr />

               <Section style={lowerSection}>
                  <Text style={cautionText}>
                     Amazon Web Services will never email you and ask you to
                     disclose or verify your password, credit card, or banking
                     account number.
                  </Text>
               </Section>
            </Section>

            <Text style={footerText}>
               This message was produced and distributed by Amazon Web Services,
               Inc., 410 Terry Ave. North, Seattle, WA 98109. © 2022, Amazon
               Web Services, Inc.. All rights reserved. AWS is a registered
               trademark of{" "}
               <Link href="https://amazon.com" target="_blank" style={link}>
                  Amazon.com
               </Link>
               , Inc. View our{" "}
               <Link href="https://amazon.com" target="_blank" style={link}>
                  privacy policy
               </Link>
               .
            </Text>
         </Container>
      </Body>
   </Html>
);

// ➕ Exemple de props pour le render local/test
EmailAutoResponse.PreviewProps = {
   verificationCode: "596853",
};

// 🎨 Styles (inchangés)
const main = {
   backgroundColor: "#fff",
   color: "#212121",
};

const container = {
   padding: "20px",
   margin: "0 auto",
   backgroundColor: "#eee",
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
   backgroundColor: "#252f3d",
   display: "flex",
   padding: "10px 0 10px 10px",
   alignItems: "center",
   justifyContent: "center",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

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
