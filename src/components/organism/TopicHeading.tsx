import { Text } from "native-base";

interface TopicHeadingProps {
    title: string;
}
export default function TopicHeading({ title }: TopicHeadingProps) {
    return (
        <Text
            className="text-xl font-bold mt-5"
            fontFamily="heading"
        >
            {title}
        </Text>
    )
}