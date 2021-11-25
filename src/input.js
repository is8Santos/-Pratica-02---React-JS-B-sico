export const Input = (props) =>   
    <div >
    <input style={{  width:400, textAlign:'center', height:20, borderRadius:5 }} 
    onChange={e => props.onChange(e)}  
    value={ props.value} 
    placeholder= "Digite seu texto aqui..." />
    </div>
;