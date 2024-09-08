import React from 'react'
import { useCallback } from 'react'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'


function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.slug || "",
            status: post?.status || "active",
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file?.$id || undefined
            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {

            const file = await appwriteService.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId

                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransfrom = useCallback((value) => {
        if (value && typeof value === "string") {
            return value.toLowerCase().replace(/ /g, "-")
        }
        return ""
    })

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransfrom(value.title), { shouldValidate: true })
            }

        })
        return () => subscription.unsubscribe()
    }, [watch, slugTransfrom, setValue])


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="w-2/3 px-2">
                <Input
                    label="Title"
                    className='mb-4'
                    placeholder="Enter title"
                    {...register("title", {
                        required: true
                    })}
                />

                <Input
                    title="Slug"
                    className='mb-4'
                    placeholder="Enter slug"
                    {...register("slug", {
                        required: true
                    })}
                    onInput={(e) => { setValue("slug", slugTransfrom(e.target.value), { shouldValidate: true }) }}
                />
                <RTE
                    label="Content"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
                <div className="w-1/3 px-2">
                    <Input
                        label="Featured Image"
                        className='mb-4'
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", {
                            required: !post
                        })}
                    />

                    {post && (
                        <div className='mb-4 w-full'>
                            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className='mb-4'
                        {...register("status", {
                            required: true
                        })}
                    />

                    <Button
                        type='submit'
                        bgColor={post ? "bg-green-500" : undefined}
                        className='w-full'
                    >
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>


            </div>

        </form>
    )
}

export default PostForm
