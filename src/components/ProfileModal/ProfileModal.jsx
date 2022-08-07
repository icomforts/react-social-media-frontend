import React, { useState, useRef, useEffect } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { selectAuth } from "../../store/slice/Auth";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../../store/slice/Upload";
import { updateUser, getUser } from "../../store/slice/Auth";
import { useParams } from "react-router-dom";
import "./ProfileModal.scss";
const ProfileModal = ({ modalOpened, setModalOpened, profileData }) => {
  const theme = useMantineTheme();
  const { authData } = useSelector(selectAuth);
  const { user } = authData;
  const [formData, setFormData] = useState(user);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const profileImageRef = useRef();
  const coverImageRef = useRef();
  const dispatch = useDispatch();
  const param = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onProfileImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setProfileImage(img);
    }
  };
  const onCoverImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setCoverImage(img);
    }
  };
  useEffect(() => {
    setFormData(user);
  }, [user]);
  const handleModalClose = () => {
    setModalOpened(false);
    setProfileImage(null);
    setCoverImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, ...userData } = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      userData.profileImage = fileName;
      try {
        await dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      userData.coverImage = fileName;
      try {
        await dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    await dispatch(updateUser({ id: param.id, userData }));
    handleModalClose();
  };
  return (
    profileData && (
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="500px"
        opened={modalOpened}
        onClose={() => handleModalClose()}
      >
        <form className="profile__edit__form" onSubmit={handleSubmit}>
          <div className="profile__edit__form__images">
            <div className="profile__edit__form__images__cover">
              {coverImage ? (
                <img src={URL.createObjectURL(coverImage)} alt="preview" />
              ) : (
                <p>背景圖</p>
              )}
              <input
                type="file"
                name="coverImg"
                ref={coverImageRef}
                onChange={onCoverImageChange}
                id="coverImageUpload"
              />
              <label htmlFor="coverImageUpload"></label>
            </div>
            <div className="profile__edit__form__images__profile">
              {profileImage ? (
                <img src={URL.createObjectURL(profileImage)} alt="preview" />
              ) : (
                <p>個人頭像</p>
              )}
              <input
                type="file"
                name="profileImg"
                ref={profileImageRef}
                onChange={onProfileImageChange}
                id="profileImageUpload"
              />
              <label htmlFor="profileImageUpload"></label>
            </div>
          </div>
          <div className="profile__edit__form__inputs">
            <div className="profile__edit__form__inputs__name">
              <input
                type="text"
                className="profile__edit__form__inputs__input"
                name="firstname"
                placeholder="名"
                value={formData.firstname}
                onChange={handleChange}
              />

              <input
                type="text"
                className="profile__edit__form__inputs__input"
                name="lastname"
                placeholder="姓"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>

            <textarea
              type="text"
              className="profile__edit__form__inputs__input"
              name="about"
              placeholder="關於你"
              value={formData.about}
              onChange={handleChange}
            />
          </div>
          <div className="profile__edit__form__buttons">
            <button className="iButton auth__formSide__from__button">
              更 新
            </button>
          </div>
        </form>
      </Modal>
    )
  );
};

export default ProfileModal;
