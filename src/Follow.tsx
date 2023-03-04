import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface FollowMetadata {
  following: boolean;
  follow: () => Promise<any | void>;
  unfollow: () => Promise<any | void>;
}

function FollowButton({
  data
}: {
  data: FollowMetadata
}) {
  return (
    <TouchableOpacity onPress={() => {
      data.following ? data.unfollow() : data.follow()
    }} style={data.following ? styles.unfollowBtn : styles.followBtn}>
      <Text style={data.following ? styles.unfollowBtnText : styles.followBtnText}>
        {data.following ? 'Unfollow' : 'Follow'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

export { FollowButton, FollowMetadata };