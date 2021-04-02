import React from 'react'
import { useField, useFormikContext } from 'formik'

import cn from 'classnames'
import * as styles from './RankItem.module.scss'
import { ErrorMessage } from '@components/forms'

export default function RankItem({ actionComponent, description, images, name }) {
    const slugName = name.replace(' ', '-').toLowerCase()
    const { values } = useFormikContext()
    const [field, meta] = useField({
        name,
        type: 'select',
        label: slugName,
    })

    let placeholderIsSelected = true
    if (values[name] !== undefined) placeholderIsSelected = false
    const placeholder = (
        <option
            disabled
            selected={placeholderIsSelected}
            key={0}
            value='Select a rank'
        >
            Select a rank
        </option>
    )

    const options = [placeholder]
    const initOptions = ['1', '2', '3', '4', '5']
    initOptions.forEach(opt => {
        let disabled = false
        if (Object.values(values).includes(opt)) {
            disabled = true
        }

        let selected = false
        if (values[name] === opt) {
            selected = true
        }
        options.push(
            <option
                value={opt}
                disabled={disabled}
                selected={selected}
                key={opt}
            >
                {opt}
            </option>
        )
    })

    return (
        <li className={styles.rankItem}>
            <div className={styles.flex}>
                <img
                    src={images[0].item_image.url}
                    alt={images[0].item_image.alt}
                    className={styles.image}
                />
                <div className={styles.details}>
                    <div className={styles.name}>{name}</div>
                    {actionComponent}
                </div>
                <div>
                    <select
                        {...field}
                        className={cn(styles.selectRank, {
                            [styles.errorBorder]: meta.touched && meta.error,
                        })}
                    >
                        {options}
                    </select>
                </div>
            </div>
            <ErrorMessage customStyles={styles.error} meta={meta} />
        </li>
    )
}
