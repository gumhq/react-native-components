import { View, StyleSheet, Image, Text } from 'react-native';
import { ProfileMetadata } from './Profile';

interface PostMetadata {
  type: string,
  content: {
    content: string
    format: string
  },
  reply?: () => any
}

function Post({
  profile,
  data
}: {
  profile: ProfileMetadata,
  data: PostMetadata
}) {
  return (
    <View style={styles.postBox}>
      <View style={styles.profileContent}>
        <Image source={{ uri: profile.avatar }} style={styles.profileImage} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.username}>@{profile.username}</Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.content}>{data.content.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#D45AFF'
  },
  name: {
    fontSize: 16,
    color: '#000',
  },
  username: {
    fontSize: 15,
    color: '#a0a0a0'
  },
  content: {
    color: '#000'
  }
});

export { Post, PostMetadata };