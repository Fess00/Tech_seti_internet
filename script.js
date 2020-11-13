var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var arr = ["hello", "first", "human", "greet", "line"]

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

function RectArr(arr)
{
	var cnt = 0
	for(var ell = 0; ell < arr.length; ell++)
	{

		cnt += 1
		if(cnt === 1)
		{
			ctx.strokeRect(5, 5, screen.width - 100, 150)
			ctx.font="100px Georgia"
			ctx.strokeText(arr[ell], ((screen.width)/2) - 50, 65+(5+150)/2)
		}
		else if (cnt > 1) 
		{
			ctx.strokeRect(5, 5, screen.width - 100, (cnt*150))
			ctx.font="100px Georgia"
			ctx.strokeText(arr[ell], ((screen.width)/2) - 50, cnt*(65+((5+150)/2)))
		}
		
	}
}

RectArr(arr)
//ctx.strokeRect(20, 20, 300, 150)
//ctx.strokeText(arr[0], 760, 85, 290)






