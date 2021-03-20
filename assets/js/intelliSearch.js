var API_KEY = '328d5643-3f8d-4889-b33b-9e933dad6546';
var API_URL = 'https://2.intelx.io/';

$(document).on('click', '#search-button', function (event) {
    event.preventDefault();

    if ($('#ioc-input').val() == '') {
        return;
    }
    $('#searchResults').html('<p>Searching for results...</p>');

    $.ajax({
        url: API_URL + "intelligent/search",
        headers: { 'x-key': API_KEY },
        type: 'POST',
        cache: true,
        data: JSON.stringify({
            term: $('#ioc-input').val(),
            maxresults: 10,
            media: 0,
            sort: 2,
            terminate: []
        }),
        success: function (p, statusText, xhr) {
            $.ajax({
                url: API_URL + "intelligent/search/result",
                headers: { 'x-key': API_KEY },
                type: 'GET',
                cache: true,
                data: "id=" + p.id + "&limit=10&statistics=1&previewlines=8",
                success: function (data, textStatus, xhr) {
                    $('#searchResults').html("");
                    if (!!data && data.records.length > 0) {
                        $.each(data.records, function (i, record) {
                            $.ajax({
                                url: API_URL + "file/preview",
                                headers: { 'x-key': API_KEY },
                                type: 'GET',
                                cache: true,
                                data: "sid=" + record['storageid'] +
                                    "&f=" + 0 +
                                    "&l=" + 8 +
                                    "&c=" + 1 +
                                    "&m=" + 1 +
                                    "&b=" + 'pastes' +
                                    "&k=" + API_KEY,
                                success: function (preview, textStatus, xhr) {
                                    if (record['name'] != '') {
                                        $('#searchResults').append('<h3>' + record['name'] + '</h3>');
                                    }
                                    $('#searchResults').append(record['date'] + '<br><pre>' + preview + '</pre><br><a href="https://intelx.io/?did=' + record['systemid'] + '" target="_blank">Full Data</a><hr>	');
                                }
                            });
                        });
                    } else {
                        $('#searchResults').html('<p>Nothing found :(</p>');
                    }
                }
            });
        }
    });
});