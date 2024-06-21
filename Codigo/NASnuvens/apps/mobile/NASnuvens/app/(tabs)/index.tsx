import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import * as Network from 'expo-network';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Application from 'expo-application';
import * as DocumentPicker from 'expo-document-picker';
import { TouchableOpacity } from 'react-native';
import { PickedDocumentCard } from '@/components/PickedDocumentCard';
import { FileType, MimeType } from '@/types/files';
import * as FileSystem from 'expo-file-system';
import { DocumentPickerAsset } from 'expo-document-picker';
import { Colors } from '@/constants/Colors';
import { postFiles } from '@/api/files';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [pickedDocuments, setPickedDocuments] = useState<DocumentPickerAsset[]>([]);
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [pickedDocumentNamesSet, setPickedDocumentNamesSet] = useState<Set<string>>(new Set());


  const pickDocuments = async () => {
    const picked = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      multiple: true,
      copyToCacheDirectory: true
    });
    const documentsToPick = (picked.assets as DocumentPickerAsset[]).filter((doc) => {
      return !pickedDocumentNamesSet.has(doc.name);
    })
    setPickedDocuments(prev => prev.concat(documentsToPick));
    (picked.assets as DocumentPickerAsset[]).forEach((doc) => {
      setPickedDocumentNamesSet((prev) => {
        prev.add(doc.name);
        return prev;
      })
    })

    await AsyncStorage.setItem('files', JSON.stringify(picked.assets))



    /*
    const filesArray = (picked.assets as DocumentPickerAsset[]).map((file) => {
      const fileToSend = {
        name: file.name,
        uri: file.uri,
        type: file.mimeType,
        size: file.size,
      }
      return fileToSend;
    });
    await postFiles(filesArray, Application.getAndroidId())
    */
  }

  const sendFiles = async () => {
    const filesArray = pickedDocuments.map((file) => {
      const fileToSend = {
        name: file.name,
        uri: file.uri,
        type: file.mimeType,
        size: file.size,
      }
      return fileToSend;
    });
    await postFiles(filesArray, Application.getAndroidId())
  }

  const removeDocument = (name: string) => {
    setPickedDocuments(prev => prev.filter(doc => doc.name !== name))
    setPickedDocumentNamesSet(prev => {
      prev.delete(name)
      return prev
    })
    AsyncStorage.setItem('files', JSON.stringify(pickedDocuments.filter(doc => doc.name !== name)));
  }

  useEffect(() => {
    const getFiles = async () => {
      setIsFileLoading(true)
      const files = await AsyncStorage.getItem('files')
      if (files) {
        const filesArray = JSON.parse(files)
        setPickedDocuments(filesArray)
      }
      setIsFileLoading(false)
    }
    getFiles()
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f4f4f4', dark: '#f4f4f4' }}
      headerImage={
        <Image
          source={require('@/assets/images/NASnuvensLogo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.pickContentButton} onPress={pickDocuments}>
            <Text>
              Pick Documents
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.pickContentButton} onPress={sendFiles}>
            <Text>
              Backup them'all!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.documentCardView}>
        {pickedDocuments && pickedDocuments.length > 0 &&
          pickedDocuments.map((doc, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => removeDocument(doc.name)}>
                <PickedDocumentCard
                  key={doc.name}
                  uri={doc.uri}
                  name={doc.name}
                  mimeType={doc.mimeType as MimeType}
                />
              </TouchableOpacity>
            )
          })
        }
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  documentCardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    gap: 8,
  },
  buttonView: {
    alignItems: 'center',
    marginVertical: 16,
  },
  pickContentButton: {
    backgroundColor: '#A1CEDC',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    alignSelf: 'center',
    margin: 'auto',
  },
});
