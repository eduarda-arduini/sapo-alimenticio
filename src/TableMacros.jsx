import React from 'react';

function TableMacros(props) {
  return <table cellSpacing="0">
  <thead>
      <tr>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Proteínas</th>
          <th>Carboidratos</th>                            
          <th>Gorduras</th>
      </tr>
  </thead>
  <tbody>
      {props.alimentos.map(alimento => {
          return <tr key={alimento}>
                      <td>{alimento[0]}</td>
                      <td>{alimento[1]}g</td>
                      <td>{alimento[2]}g</td>
                      <td>{alimento[3]}g</td>                            
                      <td>{alimento[4]}g</td>
                  </tr>
      })}
  </tbody>
</table>    
}

export default TableMacros;