exports.success = function(req, res, data, num_status) {
    res.status( num_status ).send( { error:'', body:data } )
}

exports.error = function(req, res, data, num_status) {
    res.status( num_status ).send( { error:data, body:'' } )
}