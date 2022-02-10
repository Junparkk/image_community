import React from "react";

import { Button, Grid, Image, Text } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

import { actionCreators as userActions } from "../redux/modules/post";
import { actionCreators as likeActions } from "../redux/modules/like";

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Post = (props) => {
  // const layout = useSelector((state) => state.post.list.value);
  const dispatch = useDispatch();

  switch (props.value) {
    case "1":
      return (
        <React.Fragment>
          <Grid width="100%">
            <Grid is_flex padding="16px">
              <Grid is_flex width="auto">
                <Image shape="circle" src={props.src}></Image>
                <Text bold>{props.user_info.user_name}</Text>
              </Grid>
              <Grid is_flex width="auto">
                <Text>{props.insert_dt}</Text>
                {props.is_me && (
                  <Button
                    width="50px"
                    margin="5px"
                    text="수정"
                    padding="4px"
                    _onClick={(e) => {
                      e.stopPropagation();
                      history.push(`/write/${props.id}`);
                    }}
                  ></Button>
                )}
                {props.is_me && (
                  <Button
                    width="50px"
                    text="삭제"
                    padding="4px"
                    _onClick={(e) => {
                      e.stopPropagation();
                      dispatch(userActions.deletePostFB(props.id));
                    }}
                  ></Button>
                )}
              </Grid>
            </Grid>

            <Grid is_flex>
              <Text margin="0px" size="24px" bold>
                {props.contents}
              </Text>

              <Grid width="30vw">
                <Image shape="rectangle" src={props.image_url}></Image>
              </Grid>
            </Grid>

            <Grid padding="16px">
              <FiHeart
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(userActions.likePostFB(props.id));
                }}
                size="30px"
              />
              <Text margin="0px" bold size="20">
                댓글 {props.comment_cnt}개
              </Text>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    case "2":
      return (
        <React.Fragment>
          <Grid>
            <Grid is_flex padding="16px">
              <Grid is_flex width="auto">
                <Image shape="circle" src={props.src}></Image>
                <Text bold>{props.user_info.user_name}</Text>
              </Grid>
              <Grid is_flex width="auto">
                <Text>{props.insert_dt}</Text>
                {props.is_me && (
                  <Button
                    width="50px"
                    margin="5px"
                    text="수정"
                    padding="4px"
                    _onClick={(e) => {
                      e.stopPropagation();
                      history.push(`/write/${props.id}`);
                    }}
                  ></Button>
                )}
                {props.is_me && (
                  <Button
                    width="50px"
                    text="삭제"
                    padding="4px"
                    _onClick={(e) => {
                      e.stopPropagation();
                      dispatch(userActions.deletePostFB(props.id));
                    }}
                  ></Button>
                )}
              </Grid>
            </Grid>

            <Grid is_flex>
              <Grid width="30vw">
                <Image shape="rectangle" src={props.image_url}></Image>
              </Grid>
              <Text margin="0px" size="24px" bold>
                {props.contents}
              </Text>
            </Grid>

            <Grid padding="16px">
              <FiHeart
                size="30px"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(userActions.likePostFB(props.id));
                }}
              />
              <Text margin="0px" bold size="20">
                댓글 {props.comment_cnt}개
              </Text>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    case "3":
      return (
        <React.Fragment>
          <Grid>
            <Grid is_flex padding="16px">
              <Grid is_flex width="auto">
                <Image shape="circle" src={props.src}></Image>
                <Text bold>{props.user_info.user_name}</Text>
              </Grid>
              <Grid is_flex width="auto">
                <Text>{props.insert_dt}</Text>
                {props.is_me && (
                  <Button
                    width="50px"
                    margin="5px"
                    text="수정"
                    padding="4px"
                    _onClick={(e) => {
                      e.stopPropagation();
                      history.push(`/write/${props.id}`);
                    }}
                  ></Button>
                )}
                {props.is_me && (
                  <Button
                    width="50px"
                    text="삭제"
                    padding="4px"
                    _onClick={(e) => {
                      e.stopPropagation();
                      dispatch(userActions.deletePostFB(props.id));
                    }}
                  ></Button>
                )}
              </Grid>
            </Grid>

            <Grid padding="16px" is_flex>
              <Text>{props.contents}</Text>
            </Grid>

            <Grid padding="16px">
              <Image shape="rectangle" src={props.image_url}></Image>
            </Grid>

            <Grid padding="16px">
              <FiHeart
                size="30px"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(userActions.likePostFB(props.id));
                }}
              />
              <Text margin="0px" bold size="20">
                댓글 {props.comment_cnt}개
              </Text>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    default:
      return null;
  }
};
//디폴트 프롭스 값을 줌으로써 화면이 깨지거나 하는 오류를 막음
Post.defaultProps = {
  user_info: {
    user_name: "jun",
    user_profile:
      "https://s1.best-wallpaper.net/wallpaper/m/1812/Portugal-Porto-river-bridge-city-morning_m.jpg",
  },
  image_url:
    "https://s1.best-wallpaper.net/wallpaper/m/1812/Portugal-Porto-river-bridge-city-morning_m.jpg",
  contents: "포르투!!!!",
  comment_cnt: 10,
  insert_dt: "2022-02-04 10:00:00",
  is_me: false,
};

export default Post;
