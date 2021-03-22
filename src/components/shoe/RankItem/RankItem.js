import React from 'react'
import { useField, useFormikContext } from 'formik'
import * as styles from './RankItem.module.scss'

export default function RankItem({ image, name }) {
    const { values } = useFormikContext()
    const [field, meta] = useField({
        name,
        type: 'select',
        label: name,
    })
    
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
            <div className={styles.rank}>{values[name]}</div>
            <img src={image.url} alt={image.alt} className={styles.image} />
            <div>{name}</div>
            <div>
                <select {...field}>
                    {options}
                </select>
            </div>
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </li>
    )
}
