import React, { useState } from 'react';

const UpdateSong = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setrelease_Date] = useState('');
    const [likes, setLike] = useState('')


    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
            likes: likes
        };
        console.log(newEntry);
        props.updateSongProperty(newEntry);
        setTitle('');
        setArtist('');
        setAlbum('');
        setGenre('');
        setrelease_Date('');
        setLike(0);
    }
    
    return ( 
        <div>
        <h3>Update Song</h3>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-control'>
                    <label>Title</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} />
                    <label>Artist</label>
                    <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    <label>Album</label>
                    <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    <label>Genre</label>
                    <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    <label>Release Date</label>
                    <input type='date' className='form-control' value={release_date} onChange={(event) => setrelease_Date(event.target.value)}/>
                    <button type='submit' className='btn btn-secondary'>Create Song</button>
                </div>
            </form>
        </div>
     );
}
 
export default UpdateSong;