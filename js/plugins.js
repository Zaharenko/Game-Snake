$(function(){
          $("#head-title").typed({
            strings: ["Space Snake", "Game of 2017" ,"Start playing now"],
            typeSpeed: 100,
            loop: true,
            startDelay: 200
          });
      });


            $('.remove').click(function(){
                $('input').val('');
            })


            $('.ok').click(function(){
                $('.first').hide();
                $('.second').show();
            })

            $('.backward').click(function(){
            	 $('.first').show();
                $('.second').hide();
            })

            $('.ok').keyup(function(){
    			if(event.keyCode==13){
          			
          			$('.first').hide();
                	$('.second').show();
          			
       			}
			})
        
 
            $(function(){              
            $('#login').delay(1000)
                        .show(500); 
            });

            $('.ok').on('click', function(){
				      var nick = $('.nick').val();
					     if(nick !=''){
						    $('.ok').append('#welcom');
						    $('#welcom').html('<h3>Welcom <span class="login">'+nick+'</span></h3>')
						    $( ".nick").val('');
					}
          else{
            $('#welcom').html('<h3>Welcom user </h3>')
          }
						
			});


            $('.record').click(function(){
              $('.records').show();
              $('.nick-name').animate({"left": "0em"}, "slow"); 

            });

            $('.close').click(function(){
              $('.records').hide();
            });


            $('#newgame_menu').click(function(){
              $('.snake-wrap').show();
            });

            $('#setting_menu').click(function(){
              $('.snake-wrap').show();
            });


            // $('.res').click(function(){
            //     var that = $(this);
            //     var contents = that.serialize();
            //     var nick = $(this).attr()
            //   $.ajax({
            //     url: 'add.php',
            //     dataType: 'json',
            //     data:{'id': nick,'id': score_value},
            //     success: function(data){
            //       if(data.success){
            //         alert('The result is recorded, check your position');
            //       }
            //     }
            //   });
            
            // });

            

           

            



            $.getJSON('user.json', function(data){
              var score = ('user.json');
              var nick = '<ul class="data">';

                $.each(data, function(key, val){
                  nick += '<li class="nick-name">';
                  nick += '<p class="red">'+ val.score + '</p>';
                  nick += '<span class="glyphicon glyphicon-apple" aria-hidden="true"></span>';
                  nick += '<span> '  + val.nick + '</span>';
                  nick += '</li>';
                });
              nick += '</ul>';
              $('.data').html(nick);
             
            });


            //  $.getJSON('user.json', function(data){
            //   var score = ('user.json');
            //   var nick = '<div class="user1">';

            //     $.each(data, function(key, val){
                 
            //       nick += '<p class="login-user">'+ val.score[0] + '</p>';
                  
            //       nick += '<p class="login-score"> '  + val.nick[0] + '</p>';
                
            //     });
            //   nick += '</div>';
            //   $('.data').html(nick);
             
            // });


            $('.small').click(function(){
              $('#snake').attr('id', 'small1');
              $('#medium1').attr('id', 'small1');
              $('#large1').attr('id', 'small1');
            });

            $('.medium').click(function(){
              $('#snake').attr('id', 'medium1');
              $('#small1').attr('id', 'medium1');
              $('#large1').attr('id', 'medium1');
            });

            $('.large').click(function(){
              $('#snake').attr('id', 'large1');
              $('#small1').attr('id', 'large1');
              $('#medium1').attr('id', 'large1');
            });



            $("[data-tooltip]").mousemove(function (eventObject) {

              $data_tooltip = $(this).attr("data-tooltip");
              
              $("#tooltip").text($data_tooltip)
                           .css({ 
                               "top" : eventObject.pageY + 0,
                              "left" : eventObject.pageX + 0
                           })
                           .show();

              }).mouseout(function () {

              $("#tooltip").hide()
                           .text("")
                           .css({
                               "top" : 0,
                              "left" : 0
                           });
          });


          
     
            


           

            


            


        
	

				