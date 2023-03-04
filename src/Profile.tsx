import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

interface ProfileMetadata {
  name: string;
  bio: string;
  username: string;
  following: number;
  followers: number;
  avatar: string;
  connect?: {
    following: boolean;
    follow: () => Promise<any | void>;
    unfollow: () => Promise<any | void>;
  }
}

function Profile({
  data
}: {
  data: ProfileMetadata
}) {
  return (
    <View style={styles.profileBox}>
      {/* Profile Picture, Name and Bio */}
      <View style={styles.profileContent}>
        <View style={styles.profileImgContainer}>
          <Image
            source={{ uri: data.avatar }} resizeMode={'contain'}
            style={styles.profileImg}
          />
        </View>
        <Text style={styles.name}>{data.name}</Text>
        <Text>{data.bio}</Text>
      </View>
      {/* Followers and Following Count */}
      <View style={styles.followContent}>
        <Text style={styles.followText}>{data.following} Following</Text>
        <Text style={styles.followText}>{data.followers} Followers</Text>
      </View>
      {/* Follow/Unfollow Button */}
      {data.connect && (
        <TouchableOpacity onPress={() => {
          data.connect?.following ? data.connect?.unfollow() : data.connect?.follow()
        }} style={data.connect?.following ? styles.unfollowBtn : styles.followBtn}>
          <Text style={data.connect?.following ? styles.unfollowBtnText : styles.followBtnText}>
            {data.connect.following ? 'Unfollow' : 'Follow'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  profileBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
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
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImgContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: '40%',
    aspectRatio: 1 / 1,
    backgroundColor: '#d8d8d8',
    borderRadius: 100,
    overflow: 'hidden',
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  followContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 21,
    marginTop: 20,
  },
  followText: {
    fontSize: 16,
    color: '#8c8c8c',
  },
  followBtn: {
    marginTop: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#D45AFF',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D45AFF',
  },
  unfollowBtn: {
    marginTop: 30,
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D45AFF',
  },
  followBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  unfollowBtnText: {
    color: '#D45AFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export { Profile, ProfileMetadata };