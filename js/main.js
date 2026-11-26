
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	/* ===== Responsive Menu Drawer ===== */
	var initRmenuDrawer = function() {
		var rmenuToggle = document.getElementById('rmenuToggle');
		var rmenuDrawer = document.getElementById('rmenuDrawer');
		var rmenuOverlay = document.getElementById('rmenuOverlay');
		var menuLinks = rmenuDrawer ? rmenuDrawer.querySelectorAll('.nav-tabs a') : [];

		// Abrir/cerrar drawer al hacer clic en hamburguesa
		if (rmenuToggle) {
			rmenuToggle.addEventListener('click', function(e) {
				e.stopPropagation();
				rmenuToggle.classList.toggle('active');
				rmenuDrawer.classList.toggle('active');
				rmenuOverlay.classList.toggle('active');
			});
		}

		// Cerrar drawer al hacer clic en overlay

		if (rmenuOverlay) {
			rmenuOverlay.addEventListener('click', function() {
				rmenuToggle.classList.remove('active');
				rmenuDrawer.classList.remove('active');
				rmenuOverlay.classList.remove('active');
			});
		}

		// Cerrar drawer al hacer clic en un enlace del menú
		menuLinks.forEach(function(link) {
			link.addEventListener('click', function() {
				rmenuToggle.classList.remove('active');
				rmenuDrawer.classList.remove('active');
				rmenuOverlay.classList.remove('active');
			});
		});

		// Cerrar drawer si se redimensiona la ventana a desktop
		window.addEventListener('resize', function() {
			if (window.innerWidth > 990) {
				rmenuToggle.classList.remove('active');
				rmenuDrawer.classList.remove('active');
				rmenuOverlay.classList.remove('active');
			}
		});
	};

	// Inicializar drawer cuando el DOM esté listo
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initRmenuDrawer);
	} else {
		initRmenuDrawer();
	}

