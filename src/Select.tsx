import styles from "./select.module.css"

type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

export function Select({value, onChange, options}: SelectProps) {
    return (
        <div className={styles.container}>
            <span className={styles.value}>value</span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.diveder}></div>
            <div className={styles.caret}></div>
            <ul className={styles.options}>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}