import styles from './Dropdown.module.css'

export const DropdownBtn = () => {
  return (
    <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <div className={styles.dropdownContent}>
          <button>Archive</button>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
  )
}
