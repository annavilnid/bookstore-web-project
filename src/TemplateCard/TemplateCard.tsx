import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

import { Book } from "../firebase/firebase.tsx";

type BookCardProps = {
    book: Book;
};

const cardMediaStyle = {
    minHeight: 300,
    width: 230,
    border: "1px solid red",
    objectFit: "cover",
    borderRadius: "10px",
};

export const TemplateCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                style={cardMediaStyle}
                image={book.image}
                alt={book.title}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {book.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {book.author}
                </Typography>
                <Typography variant="body2">
                    Price: ${book.price}
                </Typography>
                <Button variant="contained" color="primary">
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

