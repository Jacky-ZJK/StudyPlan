function getTransform () {
  let transform = ''
  let divStyle = document.createElement( 'div' ).style
  let transformArr = [ 'transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform']

  for ( let item of transformArr ) {
    if ( item in divStyle ) {
      return transform = item
    }
  }

  return transform
}

function getStyle ( elem, property, pseudoElt = null ) {
  return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle( elem, pseudoElt )[ property ] : elem.currentStyle[ property ]
}

function getTargetPos ( elem ) {
  let pos = {
    x: 0,
    y: 0
  }
  let transform = getTransform()
  
  if ( transform ) {
    let transformValue = getStyle( elem, transform )
    if ( transformValue === 'none' ) {
      elem.style[transform] = 'translate( 0, 0 )'
      return pos
    } else {
      let temp = transformValue.match(/-?\d+/g);
      return pos = {
        x: parseInt( temp[ 4 ].trim() ),
        y: parseInt( temp[ 5 ].trim() )
      }      
    }
  } else {
    let positionValue = getStyle( elem, 'position' )
    if ( positionValue === 'static' ) {
      elem.style.position = 'relative'
      return pos
    } else {
      let x = parseInt(getStyle(elem, 'left') ? getStyle(elem, 'left') : 0);
      let y = parseInt(getStyle(elem, 'top') ? getStyle(elem, 'top') : 0);

      return pos = {
        x: x,
        y: y
      }
    }
    
  }
}

function setTargetPos ( elem, pos ) {
  let transform = getTransform()
  if ( transform ) {
    elem.style[ transform ] = `translate( ${pos.x}px, ${pos.y}px )`
  } else {
    elem.style.left = pos.x + 'px'
    elem.style.top = pos.y + 'px'
  }
  return elem
}

function changeDrage ( elem ) {
  // 声明2个变量用来保存鼠标初始位置的x，y坐标
  let startX = 0;
  let startY = 0;

  // 声明2个变量用来保存目标元素初始位置的x，y坐标
  let sourceX = 0;
  let sourceY = 0;

  elem.addEventListener( 'mousedown', init )


  function init ( event ) {
    startX = event.pageX
    startY = event.pageY
    
    let pos = getTargetPos( elem )
    sourceX = pos.x;
    sourceY = pos.y;
  
    document.addEventListener( 'mousemove', move )
    document.addEventListener( 'mouseup', end )
  }
  
  function move ( event ) {
    let distanceX = event.pageX - startX
    let distanceY = event.pageY - startY
  
    // 计算并设置元素当前位置
    setTargetPos( elem, {
      x: (sourceX + distanceX).toFixed(),
      y: (sourceY + distanceY).toFixed()
    }) 
    
  }
  
  function end () {
    console.log( 'end' );
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', end);
  }
}

