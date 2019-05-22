$(function () {
    $('#search').keyup(function () {
        if ($('#search').val()) {
            $('#filtered_table').show();
            $('#main-content').hide();
            $.ajax({
                type: 'POST',
                url: '/ports/search/',
                data: {
                    'search_text': $('#search').val(),
                    'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),
                    'search_by': $("input[name=search_by]:checked").val(),
                },
                success: searchSuccess,
                beforeSend: function () {
                    $('#filtered_table').html("Searching ...")
                },
                dataType: 'html'
            });
        } else {
            $('#filtered_table').hide();
            $('#main-content').show();
        }
    });
});

function searchSuccess(data, textStatus, jqXHR) {
    $('#filtered_table').html(data);
}

function cancel_search() {
    $('#filtered_table').hide();
    $('#main-content').show();
    $('#search').val('');
}

function switch_search() {
    if ($('#search').val()) {
        $('#filtered_table').show();
        $('#main-content').hide();
        $.ajax({
            type: 'POST',
            url: '/ports/search/',
            data: {
                'search_text': $('#search').val(),
                'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),
                'search_by': $("input[name=search_by]:checked").val(),
            },
            success: searchSuccess,
            beforeSend: function () {
                $('#filtered_table').html("Searching ...")
            },
            dataType: 'html'
        });
    } else {
        $('#filtered_table').hide();
        $('#main-content').show();
    }
}