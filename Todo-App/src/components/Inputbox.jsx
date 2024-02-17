export const Inputbox=({label,placeholder,onChange})=>{
    return <div className="text-lg text-white">
        <div>{label}</div>
        <input placeholder={placeholder} onChange={onChange} className="rounded-md border-4"/>
    </div>
    
}