import React from 'react'
import { useField, useFormikContext } from 'formik'
import cn from 'classnames'
import * as styles from './RankItem.module.scss'

export default function RankItem({ image, name }) {
    const { values } = useFormikContext()
    const [field, meta] = useField({
        name,
        type: 'select',
        label: name.replace(' ', '-').toLowerCase(),
    })

    let hasError = false
    if (meta.touched && meta.error) hasError = true

    let placeholderIsSelected = true
    if (values[name] !== undefined) placeholderIsSelected = false
    const placeholder = <option disabled selected={placeholderIsSelected} key={0} value='Select a rank'>Select a rank</option>

    const options = [placeholder]
    const initOptions = ["1", "2", "3", "4", "5"]
    initOptions.forEach(opt => {
        let disabled = false
        if (Object.values(values).includes(opt)) {
            disabled = true
        }

        let selected = false
        if (values[name] === opt) {
            selected = true
        }
        options.push(<option
            value={opt}
            disabled={disabled}
            selected={selected}
            key={opt}
        >
            {opt}
        </option>)
    })

    return (
        <li className={styles.rankItem}>
            <div className={styles.flex}>
                <img src={image.url} alt={image.alt} className={styles.image} />
                <div className={styles.name}>{name}</div>
                <div>
                    <select {...field} className={cn(
                        styles.selectRank,
                        {
                            [styles.errorBorder]: hasError,
                        },
                    )}>
                        {options}
                    </select>
                </div>
            </div>
            {hasError ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </li>
    )
}
