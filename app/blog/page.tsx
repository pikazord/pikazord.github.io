import { Button } from "@/views/components/shared/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/views/components/shared/Card";
import Heading from "@/views/components/shared/Heading";
import React from "react";

export default function page() {
  return (
    <div className="container">
      <Button>Default</Button>
      <Button variant={"secondary"}>Default</Button>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, justo ut faucibus malesuada, velit ex commodo arcu, vel maximus felis nunc a lectus. In hac habitasse platea dictumst.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <Heading text="Services" />
      {/* <ServiceCard /> */}
    </div>
  );
}
