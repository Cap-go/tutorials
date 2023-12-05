---
title: "Using the goodeventalbum package"
description: "A tutorial on how to use the goodeventalbum package to create event albums"
created_at: "2022-01-01"
published: true
slug: album
---

# Using the goodeventalbum package

In this tutorial, we will learn how to use the goodeventalbum package to create event albums. The goodeventalbum package is a powerful tool that allows you to easily organize and share your event photos in a beautiful and interactive way.

## Installation

Before we begin, make sure you have Go installed on your machine. You can download and install Go from the official website: https://golang.org/doc/install

To install the goodeventalbum package, run the following command in your terminal:

```bash
go get github.com/goodeventalbum/goodeventalbum
```

## Creating a new event album

To create a new event album, import the goodeventalbum package in your Go code:

```go
import "github.com/goodeventalbum/goodeventalbum"
```

Next, create a new instance of the `EventAlbum` struct:

```go
album := goodeventalbum.NewEventAlbum()
```

## Adding photos to the event album

Now that we have created a new event album, we can start adding photos to it. To add a photo, use the `AddPhoto` method of the `EventAlbum` struct:

```go
album.AddPhoto("path/to/photo.jpg", "Photo 1")
album.AddPhoto("path/to/photo2.jpg", "Photo 2")
album.AddPhoto("path/to/photo3.jpg", "Photo 3")
```

You can specify the path to the photo file and a title for the photo. The photos will be added to the event album in the order they are added.

## Generating the event album HTML

Once you have added all the photos to the event album, you can generate the event album HTML using the `GenerateHTML` method of the `EventAlbum` struct:

```go
html := album.GenerateHTML()
```

The `GenerateHTML` method returns a string containing the HTML code for the event album.

## Saving the event album to a file

To save the event album to a file, use the `SaveToFile` method of the `EventAlbum` struct:

```go
album.SaveToFile("path/to/event.html")
```

The event album will be saved as an HTML file at the specified path.

## Conclusion

In this tutorial, we have learned how to use the goodeventalbum package to create event albums. We started by installing the package, creating a new event album, adding photos to the album, generating the event album HTML, and finally saving the album to a file. The goodeventalbum package provides a simple and efficient way to create beautiful event albums with Go.

I hope you found this tutorial helpful. Happy coding!

***