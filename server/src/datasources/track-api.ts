import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    
    getTracksForHome() {
        return this.get<TrackModel[]>('tracks');
    }

    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${authorId}`);
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    incrementTrackViews(trackId: string) {
        return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
    }
}

