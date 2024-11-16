import { UserLocationModel } from "../models/userLocationModel"

export interface WeatherHeaderProps {
    isTrackedView: boolean
    currentLocation: UserLocationModel | null
}