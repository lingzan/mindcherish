const tool = {
    dateFormat (date, format) {
        let _date = date ? date.replace(/-/, '/') : ''
        _date = _date ? new Date(_date) : new Date()
        if (_date === 'Invalid Date') {
            _date = 'Invalid Date'
        } else {
            let year = _date.getFullYear()
            year = year > 9 ? year : '0' + year
            let month = _date.getMonth() + 1
            month = month > 9 ? month : '0' + month
            let day = _date.getDate()
            day = day > 9 ? day : '0' + day
            let hours = _date.getHours()
            hours = hours > 9 ? hours : '0' + hours
            let minutes = _date.getMinutes()
            minutes = minutes > 9 ? minutes : '0' + minutes
            let seconds = _date.getSeconds()
            seconds = seconds > 9 ? seconds : '0' + seconds

            if (arguments.length > 1) {
                let _format = format.toLocaleLowerCase()
                return _format.replace(/y+/, year).replace(/m+/, month).replace(/d+/, day).replace(/h+/, hours).replace(/i+/, minutes).replace(/s+/, seconds)
            } else {
                _date = new Date().getTime() - _date.getTime()
                _date = Math.floor(_date / 1000)

                const dayAmount = _date / (3600 * 24)
                const hoursAmount = _date / (3600)
                const minutesAmount = _date / (60)
                if (dayAmount > 1) {
                    _date = Math.floor(dayAmount) + '天前'
                } else if (hoursAmount > 1) {
                    _date = Math.floor(hoursAmount) + '小时前'
                } else if (minutesAmount > 1) {
                    _date = Math.floor(minutesAmount) + '分钟前'
                }
                return _date
            }
        }
    }
}

export default tool
