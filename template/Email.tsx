import { Html, Text } from "@react-email/components";

interface EmailProps {
    email: string;
    name: string;
    message: string;
}
const Email: React.FC<EmailProps> = ({ name, email, message }: EmailProps) => {
    return (
        <Html lang="en">
            <Text>Name:{name}</Text>
            <Text>Contact:{email}</Text>
            <Text>Message:{message}</Text>
        </Html>
    );
};

export default Email;