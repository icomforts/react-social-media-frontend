import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="auth__formSide__from auth__formSide__from--info">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="auth__formSide__from__input"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="auth__formSide__from__input"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="auth__formSide__from__input"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="auth__formSide__from__input"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="auth__formSide__from__input"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="auth__formSide__from__input"
            placeholder="RelationShip Status"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="iButton auth__formSide__from__button">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
