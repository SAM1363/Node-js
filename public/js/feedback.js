$(function() {

    $.get('api', function (data){
        updateFeedback(data);
    });

    $('.feedback-form').submit(function(e){
        e.preventDefault();

        $.post('api',{
            name: $('#name').val(),
            title: $('#title').val(),
            message: $('#message').val(),
        }, updateFeedback)
    })

    $('.feedback-messages').on('click', function(e){
        if(e.target.className = "far fa-trash-alt"){
            $.ajax({
                url: 'api/' + e.target.id,
                type: 'DELETE',
                success: updateFeedback
            });
            
        }
    });


    function updateFeedback(data) {
        var output = "";

        $.each(data, function(key, item){
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <button class="feedback-trash btn trashButt"> <i id="' + key + '" class="far fa-trash-alt"></i> </button>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + '--'  + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';
            output += '     <hr>'

            });
        $('.feedback-messages').html(output);
}
})