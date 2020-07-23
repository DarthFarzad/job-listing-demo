import data from './data.json';
import {TOGGLE_FILTER, CLEAR_FILTER} from './actions';

export const reducer = (state, { type, payload }) =>{
    switch(type){
        case TOGGLE_FILTER:
            const filters = state.filters.includes(payload) ? state.filters.filter(filter => filter !== payload) : [...state.filters, payload];
            const jobs = filters.length ? state.jobs
                .filter(job =>
                    filters.includes(job.role) ||
                    filters.includes(job.level) ||
                    filters.includes(job.role) ||
                    job.languages.some(language => filters.includes(language)) ||
                    job.tools.some(tool=> filters.includes(tool))) : data;
            return {...state, jobs, filters};
        case CLEAR_FILTER:
            return initialState;
        default:
            return state;
    }
}

export const initialState = { jobs: data, filters: [] };