export const statusHandler = (status) => {
  let color

  switch (status) {
    case 'DONE':
      color = '#60bb46'
      break
    case 'CANCEL':
      color = '#F60D0E'
      break
    case 'IN-PROGRESS':
      color = '#F86300'
      break
  }


  return {
    'background': color
  }
}


export const statusTextColorHandler = (status) => {
  let color

  switch (status) {
    case 'DONE':
      color = '#60bb46'
      break
    case 'CANCEL':
      color = '#F60D0E'
      break
    case 'IN-PROGRESS':
      color = '#F86300'
      break
  }


  return {
    'color': color
  }
}
