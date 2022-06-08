        
        const header= document.getElementById('header');
		const toggle= document.getElementById('toggle');
		const navbar= document.getElementById('navbar');

		document.onclick =function(e)
		{
			// khi click ngoài menu thì kích hoạt
			if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !=='navbar')
			{
				// khi click vào menu xóa class active
				toggle.classList.remove('active');
				// và đồng thời xóa class trong danh sách menu để thoát
				navbar.classList.remove('active');
			}
		}

		toggle.onclick=function()
		{
			// Khi dc click cho menu class active
			toggle.classList.toggle('active');
			// cũng cho bản danh sách trong menu có class active để sau này dể sửa
			navbar.classList.toggle('active');
		}