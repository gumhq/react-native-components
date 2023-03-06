# Gum UI Components for React Native

This is a collection of social UI components for React Native that can be tied together with the [Gum](https://gum.fun/) protocol.

![Gum Components](https://user-images.githubusercontent.com/61944452/223193983-aeb2e03c-5985-444f-a4f0-413dda5a685f.png)

## Installation

```
npm install @gumhq/react-native-components
```
or
```
yarn add @gumhq/react-native-components
```


### Follow Button

This component allows you to render a follow button. It takes in the following data structure as props.

```tsx
import { FollowButton } from '@gumhq/react-native-components';
import { useState } from 'react';

function Follow() {
  const [following, setFollowing] = useState(false);

  const followData = {
    following: following,
    follow: async () => setFollowing(true),
    unfollow: async () => setFollowing(false),
  }

  return (
    <FollowButton data={followData} />
  )
}
```

### Profile

This component allows you to render a profile. It takes in the following data structure as props.

```tsx
import { Profile, ProfileMetadata } from '@gumhq/react-native-components';

function ProfileComponent() {
  const followData = {...};
  const profile: ProfileMetadata = {
    name: "Kunal Bagaria",
    bio: "Software Engineer @ Gum",
    username: "kunal",
    following: 5,
    followers: 500,
    avatar: "https://i.imgur.com/uGv5Zca.jpg",
    connect: followData // Optional
  }
  return (
    <Profile data={profile} />
  );
}

```

### Post

This component allows you to render a post. It takes in the post and profile data as props.

```tsx
import { Post, PostMetadata, ProfileMetadata } from '@gumhq/react-native-components';

function PostComponent() {
  const profile: ProfileMetadata = {...}
  const post: PostMetadata = {
    type: "text",
    content: {
      format: "markdown",
      content: "Hello World"
    }
  }
  return (
    <Post
      profileData={profile}
      data={post}
    />
  );
}
```
