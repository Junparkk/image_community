import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useRef } from "react";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  //아이디가 들어오면 수정으로 보여주기 위한 번수
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;
  //수정모드 판별
  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  //새로고침 시 메인화면으로 이동
  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요");
      history.goBack();

      return;
    }
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const { history } = props;

  const [contents, setContents] = React.useState(_post ? _post.contents : "");
  const [value, setValue] = React.useState(false);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents, value));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인하러 가기
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px">
          {is_edit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Upload />
      </Grid>
      <Grid padding="16px">
        <input type="radio" name="chk_info" value="1" onClick={changeValue} />
        이미지가 오른쪽으로 가라
        <Grid is_flex>
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>

          <Grid width="30vw">
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : "https://w7.pngwing.com/pngs/767/518/png-transparent-color-vantablack-light-graphy-white-paper-blue-white-text-thumbnail.png"
              }
            ></Image>
          </Grid>
        </Grid>
      </Grid>
      <Grid padding="16px">
        <input type="radio" name="chk_info" value="2" onClick={changeValue} />
        이미지가 왼쪽으로 가라
        <Grid is_flex>
          <Grid width="30vw">
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : "https://w7.pngwing.com/pngs/767/518/png-transparent-color-vantablack-light-graphy-white-paper-blue-white-text-thumbnail.png"
              }
            ></Image>
          </Grid>
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
      </Grid>
      <Grid padding="16px">
        <input type="radio" name="chk_info" value="3" onClick={changeValue} />
        이미지가 가운데로 가라
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        <Image
          shape="rectangle"
          src={
            preview
              ? preview
              : "https://w7.pngwing.com/pngs/767/518/png-transparent-color-vantablack-light-graphy-white-paper-blue-white-text-thumbnail.png"
          }
        ></Image>
      </Grid>
      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        ></Input>
      </Grid>

      <Grid padding="16px">
        {is_edit ? (
          <Button
            text="게시글 수정"
            _onClick={editPost}
            disabled={!preview || contents === "" ? true : false}
          ></Button>
        ) : (
          <Button
            text="게시글 작성"
            _onClick={addPost}
            disabled={!preview || contents === "" ? true : false}
          ></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
