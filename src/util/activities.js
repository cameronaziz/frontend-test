import moment from 'moment';
import axios from 'axios';

export const groupByDate = (list) =>  {
    const data = [];
    for (let item of list) {
        const key = moment(item.created_at).format('MMMM D, YYYY');
        const index = data.findIndex((item) => item.key === key);
        if (index < 0) {
            data.push({
                key,
                values: [item]
            });
        } else {
            data[index].values.push(item);
        }
    }
    return data;
}

export const getActivities = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://aircall-job.herokuapp.com/activities')
            .then((response) => {
                const data = response.data.sort((a, b) => ( a.created_at < b.created_at))
                resolve(data)
            })
            .catch((error) => {
                console.log(error);
                reject(error)
            });
    })
}

export const getActivity = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://aircall-job.herokuapp.com/activities/${id}`)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.log(error);
                reject(error)
            });
    })
}

export const archiveActivity = (id) => {
    // return new Promise((resolve, reject) => {
        axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
            is_archived: true
          })
        //   .then((response) => {
        //         resolve(response)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         reject(error)
        //     });
    // })
}

