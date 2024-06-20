import { MimeType } from "@/types/files";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
type PickedDocumentCardProps = {
    name: string;
    mimeType: MimeType;
    uri: string;
}
export const PickedDocumentCard = ({ name, mimeType, uri }: PickedDocumentCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                {mimeType == MimeType.IMAGE
                    ? <Image source={{ uri }} borderTopLeftRadius={12} borderTopRightRadius={12} width={150} height={50} resizeMode="cover" />
                    : getCardIcon(mimeType)
                }
            </View>
            <View style={styles.cardBottom}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textName}>
                    Name: {name}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textName}>
                    Type: {mimeType}
                </Text>
            </View>
        </View>
    )
}

const getCardIcon = (mimeType: MimeType) => {
    switch (mimeType) {
        case MimeType.PDF:
            return <AntDesign name="pdffile1" size={24} color="black" />;
        case MimeType.IMAGE:
            return <AntDesign name="picture" size={24} color="black" />;
        case MimeType.DOC:
            return <AntDesign name="filetext1" size={24} color="black" />;
        default:
            return <AntDesign name="file1" size={24} color="black" />;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors["blue-light"],
        borderRadius: 4,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        minHeight: 100,
        minWidth: 50,
        width: 150
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBottom: {
        padding: 8,
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.gray,
    }
});