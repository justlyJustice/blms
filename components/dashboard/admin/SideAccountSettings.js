import Image from "next/image";
import Link from "next/link";

const SideAccountSettings = ({ tab }) => {
  return (
    <div className={styles.acctUpdate}>
      <div className={`flex flex-column ${styles.updatePhoto}`}>
        <Image
          alt="profile-pic"
          className={styles.avatar}
          src={avatar}
          width={100}
          height={100}
        />

        <div>
          <p>Click to upload or update your profile photo</p>
        </div>

        <Button className={styles.photobtn} background={`purple`}>
          Upload Photo
        </Button>
      </div>

      <div className={`flex flex-column ${styles.preferences}`}>
        <h3>Other Account Settings</h3>

        <div className={`flex flex-column ${styles.prefLinks}`}>
          <Link href={`/admin/settings/security`}>
            <i className="bx bx-check-shield"></i>
            Security & Login
          </Link>

          <Link href={`#`}>
            <i className="bx bx-bell"></i>
            Push Notification
          </Link>

          <Link href={`#`}>
            <i className="bx bx-envelope"></i>
            Email Preferences
          </Link>

          <Link href={`#`}>
            <i className="bx bx-globe"></i>
            Language & Region
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideAccountSettings;
