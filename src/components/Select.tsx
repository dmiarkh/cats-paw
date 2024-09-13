interface Props {
    name: string
    options: OptionData[]
    defaultValue?: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

interface OptionData {
    id: string
    name: string
}

export default function Select({
    name,
    options,
    defaultValue,
    placeholder,
    onChange,
}: Props) {
    return (
        <select
            name={name}
            className="grow rounded-xl bg-bgColor px-3 py-2 text-textColor-light"
            defaultValue={defaultValue}
            onChange={onChange}
        >
            {placeholder && <option>{placeholder}</option>}
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}
