
$(document).ready( function () {

    $('#table_id').DataTable( {
        ajax: {
            url: 'data/user-list.json',
            dataSrc: 'data'
        },
        columns: [
            { data: 'id' },
            { data: 'full_name' },
            { data: 'role' },
            { data: 'email' }
        ]
    } );

} );