const React = require("react");
const {
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
   Button
} = require("@react-email/components");

const baseUrl = process.env.FRONTEND_URL;

export const EmailAutoResponse = (props) => (
   <Html lang="en">
      <Text>Some title</Text>
      <Hr />
      <Button href="https://example.com">Click me</Button>
   </Html>
);
