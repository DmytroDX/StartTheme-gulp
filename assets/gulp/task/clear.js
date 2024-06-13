import { deleteAsync } from "del";

export const clear = () => {
    return deleteAsync(app.path.clear.build);
}