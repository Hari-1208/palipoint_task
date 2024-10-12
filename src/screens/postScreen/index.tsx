import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../../redux/commonSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {styles} from './styles';

const PostScreen = () => {
  //dispatch
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  //selectors
  const {loading} = useSelector((state: RootState) => state.common);

  //local states
  const [posts, setPosts] = useState<any[]>([]);

  //Fetch posts from API
  useEffect(() => {
    fetchPostsApiCall();
  }, []);

  //get posts API calls
  const fetchPostsApiCall = () => {
    dispatch(
      fetchPosts({
        callBack: (res: any[]) => {
          setPosts(res);
        },
      }),
    );
  };

  //Delete post handler
  const deletePost = (id: number) => {
    Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
      {text: 'Cancel'},
      {
        text: 'Delete',
        onPress: () => {
          const updatedPosts = posts.filter(post => post.id !== id);
          setPosts(updatedPosts);
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        refreshing={loading}
        onRefresh={() => {
          fetchPostsApiCall();
        }}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <View style={styles.postText}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title?.toUpperCase()}
              </Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
            <TouchableOpacity
              style={styles.trashIcon}
              onPress={() => deletePost(item.id)}>
              <Icon name="trash" size={25} color="#d11a2a" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PostScreen;
